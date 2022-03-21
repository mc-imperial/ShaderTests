#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 for(int GLF_live10i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_live10i ++)
  {
   _GLF_global_loop_count ++;
   if(GLF_live10i == 1)
    {
    }
   else
    {
     if(GLF_live10i == 2)
      {
      }
     else
      {
       if(gl_FragCoord.x < 1.0)
        {
         discard;
        }
      }
    }
  }
}
