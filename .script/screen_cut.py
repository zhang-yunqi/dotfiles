#!/bin/python

import os
import datetime

filename = str(datetime.datetime.now()).split('.')[0]

size = os.popen('slurp', 'r').read().replace("\n","")

os.system(f'grim -g "{size}" ~/Pictures/"{filename}.png"')


os.system(f'wl-copy < ~/Pictures/"{filename}".png')

os.system("notify-send 截图一张")
