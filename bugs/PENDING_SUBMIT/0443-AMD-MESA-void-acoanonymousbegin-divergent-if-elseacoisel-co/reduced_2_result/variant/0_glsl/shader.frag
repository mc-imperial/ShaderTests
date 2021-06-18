#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 do
  {
   _GLF_global_loop_count ++;
  }
 while((gl_FragCoord.y < 0.0) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 do
  {
   _GLF_global_loop_count ++;
   if(true)
    {
     discard;
    }
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
