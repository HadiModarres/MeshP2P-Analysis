#!/bin/bash

for ((i=0;i<$3;i++))
do
  $2 --new-window $1 &
done
