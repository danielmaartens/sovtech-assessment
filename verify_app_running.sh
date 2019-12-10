#!/usr/local/bin/bash

red=$(tput setaf 1)
white=$(tput setaf 7)
green=$(tput setaf 2)
blink=$(tput blink)
normal=$(tput sgr0)
bold=$(tput bold)
powder_blue=$(tput setaf 153)

set -e

is_app_running() {
    local __resultvar=$1
    local myresult="null"

    if (exec &>/dev/tcp/127.0.0.1/5000) &>/dev/null ; then
       local response=$(echo "running")
       eval $__resultvar="'$response'"
    fi
}

is_app_running running

while [ -z "$running" ]
do
    is_app_running running
done

echo "${normal}${bold}The Chuckle Generator App is now ready ! Go to ${green} http://localhost:5000 ${normal}${bold} to check it out !"

