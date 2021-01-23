name=desafio
num=${1:-23}
n=1
while [ $n -lt $num ]
do
  touch -- "$name$n".js
  let n++
done