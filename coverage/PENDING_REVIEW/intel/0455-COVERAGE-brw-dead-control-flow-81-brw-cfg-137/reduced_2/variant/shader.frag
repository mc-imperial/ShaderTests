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

layout(location = 0) out vec4 _GLF_color;

void main()
{
 for(int i = 0; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if(i == 0)
    {
    }
   else
    {
     return;
    }
  }
 if(gl_FragCoord.y < 1.0)
  {
   return;
  }
 _GLF_color = vec4(vec3(1.0), injectionSwitch.y);
}
