#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
void main()
{
 if(1.0 > injectionSwitch.y)
  {
  }
 else
  {
   if(gl_FragCoord.y < 0.0)
    {
    }
   else
    {
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
    }
  }
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
  }
}
