#version 320 es

precision highp float;

precision highp int;

int performPartition()
{
 round(unpackHalf2x16(1u));
 return 1;
}
void main()
{
 performPartition();
}
