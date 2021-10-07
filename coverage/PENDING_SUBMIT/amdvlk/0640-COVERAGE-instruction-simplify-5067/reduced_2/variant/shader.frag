#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of GLF_live12resolution: [0.2501191, 0.1597625]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_live12resolution;
};
vec4 GLF_live12trace(ivec2 GLF_live12pos)
{
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   if(GLF_live12pos.x < 1)
    {
     return vec4(1.0);
    }
  }
 return vec4(1.0);
}
precision highp int;

precision highp float;

void main()
{
 GLF_live12trace(ivec2(int((vec4(0.0, 1.0, 1.0, 1.0).xy / GLF_live12resolution).x), 1));
}
