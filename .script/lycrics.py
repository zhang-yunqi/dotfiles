#!/bin/python

import mpd
import re
import os
client = mpd.MPDClient()
client.timeout = 10
client.idletimeout = None

client.connect("localhost",6600)
import socket
# 创建 socket 对象
# 获取本地主机名
# 连接服务，指定主机和端口


class Time():
    def __init__(self,minute: int, second: int,  millisecond: int):
        self.sec = second
        self.min = minute
        self. ms = millisecond

    def debug(self):
        return "[{}:{}.{}]".format(self.min,self.sec,self.min)

    def __lt__(self, b):
        return self.min*60000+self.sec*1000+self.ms<b.min*60000+b.sec*1000+b.ms

    def __gt__(self, b):
        return self.min*60000+self.sec*1000+self.ms>b.min*60000+b.sec*1000+b.ms

class TimeMaker():
    def from_list(self, li):
        time = Time(int(li[0]), int(li[1]), int(li[2]))
        return time

class Lyrics():
    def __init__(self,lyrics: str):
        ly = re.findall(r"(\[\d{2}:\d{2}.\d{0,3}\]) ?(\S+)\n", lyrics)
        maker = TimeMaker()
        self.data = [{'time':maker.from_list(re.findall(r'\[(\d{2}):(\d{2}).(\d{2,3})\]', l[0])[0]), "text":l[1]} for l in ly]

    def get_lyrics(self, time:Time):
        for i, l in enumerate(self.data):
            if i<len(self.data)-1:
                if l['time']<time and time<self.data[i+1]['time']:
                    return i, self.data[i]
            else:
                return i, self.data[len(self.data)-1]


lastsong = ''
last_message = ''
lyrics = ''
index=0
last_state=''
while True:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    host = socket.gethostname()
# 设置端口号
    port = 4090
    s.connect((host, port))

    time = client.status()['time']
    time = Time(int(int(time.split(':')[0])/60), int(float(time.split(':')[0])%60) , int(time.split(':')[1]))

    message = ''
    
    song = client.currentsong()
    if song['title'] != lastsong:
        if "{} - {}.txt".format(song['artist'], song['title']) in os.listdir(os.environ["HOME"]+"/Music/lyrics"):
            with open(os.environ["HOME"]+"/Music/lyrics/{}.txt".format("{} - {}".format(song['artist'], song['title'])), "r") as f:
                lyrics  = f.read()
            ly = Lyrics(lyrics)
            lastsong = client.currentsong()['title']
        else:
            message = "无歌词文件"
    

    index = 0
    if ly.get_lyrics(time)!=None:
        index, l = ly.get_lyrics(time)
        message=l['text']
    else:
        message = f"{song['title']} - {song['artist']}"
     
    state = client.status()['state']
    if message != last_message or state !=last_state:
        if state == 'play':
            s.send((state+"/  "+message).encode())
        else:
            s.send((state+"/    "+song['title']+" by "+song['artist'].replace('&','と')).encode())
    last_state=state
    last_message = message
    s.close()

    
