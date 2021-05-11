# What's this?
ローカルで起動するPythonで実行する静的htmlなどの確認用Script

# How to setup
mkcertのインストール
```
$ brew install mkcert
$ mkcert --install
```

ドメイン指定してpemファイルの生成
```
$ mkcert localhost *.localhost waysaku.com *.waysaku.com
$ ls -l
localhost+3-key.pem
localhost+3.pem
```

pemファイルパスの指定
```
ctx.load_cert_chain('./localhost+3.pem', keyfile='./localhost+3-key.pem')
```

サーバ起動
```
$ python3 server.py
```

# Reference
https://qiita.com/rkunihiro/items/530b5dc685bd3bff2082
