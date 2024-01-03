import os
import datetime

filename = str(datetime.datetime.now()).split('.')[0]

os.system(f'grim ~/Pictures/"{filename}".png')

os.system(f'wl-copy < ~/Pictures/"{filename}".png')

os.system("notify-send 截图一张")
