#version 320 es

precision highp int;

precision highp float;

void main()
{
 int i = 1;
 do
  {
   switch(i)
    {
     case 0:
     if(1u < uint(bitCount(findMSB(1))))
      {
       continue;
      }
    }
   i ++;
  }
 while(i < 10);
}
