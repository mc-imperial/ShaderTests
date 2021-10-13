#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 int a = 1;
 do
  {
   _GLF_global_loop_count ++;
   if(1.0 > injectionSwitch.y)
    {
     for(     a = 0;
 (a < a) && (_GLF_global_loop_count < _GLF_global_loop_bound); a ++)
      {
       _GLF_global_loop_count ++;
      }
    }
   if(a + a > 1)
    {
     break;
    }
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
