#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

float s_g = 1.0;

void main()
{
 vec3 point1 = vec3(1.0);
 vec3 computePoint_inline_return_value_2 = vec3(1.0);
 vec3 result = vec3(1.0);
 vec3 d = vec3(1.0);
 vec3 drawShape_inline_return_value_1 = vec3(1.0);
 vec3 computeColor_inline_return_value_0 = vec3(1.0);
 int msb8 = 1;
 msb8 = 256;
 do
  {
   if(1.0 > injectionSwitch.y)
    {
     break;
    }
   msb8 --;
  }
 while(msb8 > 1);
 s_g = float(msb8);
 computeColor_inline_return_value_0 = vec3(1.0, s_g, 1.0);
 drawShape_inline_return_value_1 = computeColor_inline_return_value_0;
 d = drawShape_inline_return_value_1;
 result = d;
 computePoint_inline_return_value_2 = result;
 point1 = computePoint_inline_return_value_2;
 vec3 mixed = vec3(1.0);
 mixed = point1;
 _GLF_color = vec4(mixed, 1.0);
}
