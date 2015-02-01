Album_2013_2014
===============

Фото альбом школи за 2013/14 навчальний рік


# Setup

## Install git, ruby

- Depending on your OS
- Use either RVM or rbenv

## Fork  and clone repository

    git clone git@github.com:Dzherelce/Album_2013_2014.git

## Install gems

    bundle install

## Setup build directory

    git clone -b gh-pages git@github.com:Dzherelce/Album_2013_2014.git build

## Preview

    middleman

## Build and push

    middleman build
    cd build
    git push origin gh-pages
