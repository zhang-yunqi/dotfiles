#!/bin/python
import os
import socket

import sys

serversocket = socket.socket(
            socket.AF_INET, socket.SOCK_STREAM)

# 获取本地主机名
host = socket.gethostname()

port = 4090

# 绑定端口号
serversocket.bind((host, port))

# 设置最大连接数，超过后排队
serversocket.listen(5)

while True:
    # 建立客户端连接
    clientsocket,addr = serversocket.accept()      
    msg = clientsocket.recv(1024).decode('utf-8').split("/")
    if len(msg)>1:
        with open(os.environ['HOME']+"/.config/hypr/store/dynamic_out.txt", "w") as f:
            f.write("{"+f'"class":"{msg[0]}", "text":"{msg[1]}"'+"}")
    clientsocket.close()
