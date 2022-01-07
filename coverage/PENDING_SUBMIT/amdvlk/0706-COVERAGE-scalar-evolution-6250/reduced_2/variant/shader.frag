#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

float h_r = 1.0;

void main()
{
 int GLF_live7count = 1;
 do
  {
   _GLF_global_loop_count ++;
   if(gl_FragCoord.y < 1.0)
    {
     modf(1.0, h_r);
     GLF_live7count ++;
    }
   GLF_live7count ++;
  }
 while((GLF_live7count != 2) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
