#version 320 es

precision highp float;

int GLF_live9data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), GLF_live9temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void GLF_live9merge(int GLF_live9from, int GLF_live9to)
{
 int GLF_live9k = 1;
 int GLF_live9_looplimiter1 = 1;
 while(true)
  {
   if(GLF_live9_looplimiter1 >= 6)
    {
     break;
    }
   GLF_live9_looplimiter1 ++;
   GLF_live9temp[clamp(GLF_live9k ++, 0, 10 - 1)] = GLF_live9data[1];
  }
 int GLF_live9_looplimiter2 = 1;
 GLF_live9_looplimiter2 = 0;
 for(int GLF_live9i = GLF_live9from; GLF_live9i <= GLF_live9to; GLF_live9i ++)
  {
   if(GLF_live9_looplimiter2 >= 6)
    {
     break;
    }
   GLF_live9_looplimiter2 ++;
   GLF_live9data[clamp(GLF_live9i, 0, 10 - 1)] = GLF_live9temp[1];
  }
}
precision highp int;

precision highp float;

void main()
{
 int performPartition_inline_return_value_1 = 1;
 int GLF_live9_looplimiter4 = 1;
 for(int GLF_live9m = 1; true; GLF_live9m = 2)
  {
   if(GLF_live9_looplimiter4 >= 6)
    {
     break;
    }
   GLF_live9_looplimiter4 ++;
   for(int GLF_live9i = 1; GLF_live9i < 10; GLF_live9i += GLF_live9m)
    {
     GLF_live9merge(GLF_live9i, 10);
    }
  }
}
