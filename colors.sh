#!/bin/bash

# This program prints down all the colors
# And inserts lorem ipsum

colors=""

clear

for((bg=40;bg<=47;bg++)); do
	colors="${colors}\033[${bg}m      \033[0m   "
done

echo -e "${colors}"
echo -e "${colors}"
echo -e "${colors}"
echo -e "${colors}"
echo
echo "    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor risus, venenatis eu placerat mattis, egestas eget lorem. Cras iaculis urna sed aliquet pharetra. Praesent tempor finibus mollis."
echo
echo
