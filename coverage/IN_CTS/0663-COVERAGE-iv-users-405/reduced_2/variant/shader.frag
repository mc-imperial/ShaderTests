#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 for(int r = 1; (r < 3) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   int GLF_live1_looplimiter3 = 1;
   do
    {
     _GLF_global_loop_count ++;
     if(GLF_live1_looplimiter3 >= 6)
      {
       break;
      }
     GLF_live1_looplimiter3 ++;
     int GLF_live1directions = 1;
     r = (r / 256 + GLF_live1_looplimiter3);
    }
   while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
  }
}
