#version 320 es

precision highp float;

precision highp int;

int GLF_live3data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), GLF_live3temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void GLF_live3merge(int GLF_live3from, int GLF_live3mid, int GLF_live3to)
{
 int GLF_live3k = 1;
 int GLF_live3_looplimiter1 = 1;
 while(GLF_live3from <= GLF_live3mid)
  {
   if(GLF_live3_looplimiter1 >= 6)
    {
     break;
    }
   GLF_live3_looplimiter1 ++;
   GLF_live3temp[clamp(GLF_live3k ++, 0, 10 - 1)] = GLF_live3data[1];
  }
 for(int GLF_live3i = GLF_live3from; GLF_live3i <= GLF_live3to; GLF_live3i ++)
  {
   GLF_live3data[clamp(GLF_live3i, 0, 10 - 1)] = GLF_live3temp[1];
  }
}
precision highp float;

void main()
{
 for(int GLF_live3m = 1; GLF_live3m <= 1; GLF_live3m = 2 * GLF_live3m)
  {
   for(int GLF_live3i = 0; GLF_live3i < 10; GLF_live3i += 2 * GLF_live3m)
    {
     GLF_live3merge(GLF_live3i, GLF_live3i + GLF_live3m, GLF_live3i + 1 - 1);
    }
  }
}
