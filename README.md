# installation

npm i

# install db-migrate secara global melalui terminal

npm install -g db-migrate

# Migration

documentation https://db-migrate.readthedocs.io/en/latest/API/SQL/

# create file migration

## db-migrate create migrationName

ex: db-migrate create products

## up migration file

hanya 1 file
db-migrate up

semua file
db-migrate up:all

spesifik file
db-migrate up fileName
ex: db-migrate up 20230826203255-products

## down migration

hanya 1 file
db-migrate down

semua file
db-migrate reset

# Run App

npm run dev

# Structure Folder

configs = menyimpan file file untuk konfigurasi, contoh: configs database mysql
controllers = berfungsi untuk koneksi atau query ke database
routes = untuk router
