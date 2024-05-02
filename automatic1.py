#インポート
import webbrowser
import time

#URLを開く
webbrowser.open('https://www.youtube.com/')
while True:
  print('Program executed successfully. This window will automatically close.')
#自動終了
  time.sleep(5)
  break
