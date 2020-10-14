# bomberhuman
# 現状
- プレイヤーを表示し，矢印キーの入力で操作する．

# Install and Setup
- clone
  - 以下のコマンドを実行し，このリポジトリを clone する．

    ```
    $ git clone https://github.com/nakazono0424/bomberhuman.git
    ```

- Build the project
  - ` bomberhuman/ `ディレクトリで以下のコマンドを実行し， wasm のバイナリファイルにコンパイルする．

    ```
    $ wasm-pack build
    ```
    
- Install the dependencies  
  - `bomberhuman/www/` ディレクトリで以下のコマンドを実行し，依存関係をインストールする．
  
  ```
  $ npm install
  ```
# Run
- 以下のコマンドを実行して，`localhost:8080`へアクセスする．
   
  ```
  $ npm run start
  ```
