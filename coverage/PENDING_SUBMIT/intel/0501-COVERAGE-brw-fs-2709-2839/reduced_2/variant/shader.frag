#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

mat4 m44;

void main()
{
 _GLF_color = vec4(1.0);
 for(int c = 1; c < 4; c ++)
  {
   if(1.0 < determinant((injectionSwitch.x < 1.0) ? mat4(1.0) : (m44 --)))
    {
     _GLF_color = mat3x4(1.0)[1];
    }
  }
}
