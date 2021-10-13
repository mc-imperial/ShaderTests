#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

vec3 mand()
{
 do
  {
   _GLF_global_loop_count ++;
   if(1.0 < determinant(mat4(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, injectionSwitch.x, 0.0, 0.0)))
    {
     return vec3(1.0);
    }
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 return vec3(1.0);
}
void main()
{
 mand();
}
