#version 320 es

precision highp float;

precision highp int;

void main()
{
 int GLF_live3count = 1;
 int GLF_live3_looplimiter4 = 1;
 do
  {
   if(GLF_live3_looplimiter4 >= 1)
    {
     break;
    }
   GLF_live3_looplimiter4 ++;
   if(true)
    {
     discard;
    }
   GLF_live3count ++;
  }
 while(GLF_live3count != 1);
}
