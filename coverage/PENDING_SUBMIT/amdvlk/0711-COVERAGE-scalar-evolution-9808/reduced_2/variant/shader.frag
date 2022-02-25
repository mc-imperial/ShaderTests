#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

int GLF_dead7index = 1;

precision highp int;

precision highp float;

void main()
{
 for(int c = 0; (c < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); c ++)
  {
   _GLF_global_loop_count ++;
   if(gl_FragCoord.x < 1.0)
    {
     GLF_dead7index ++;
    }
  }
 for(int GLF_dead12k = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   if(GLF_dead7index * GLF_dead7index + 1 > 1)
    {
     break;
    }
   GLF_dead7index ++;
  }
}
