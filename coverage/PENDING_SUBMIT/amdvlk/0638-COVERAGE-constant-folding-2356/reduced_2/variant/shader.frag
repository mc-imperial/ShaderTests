#version 320 es

precision highp float;

layout(location = 0) out vec4 _GLF_color;

float patternize(vec2 uv)
{
 switch(1)
  {
   case 0:
   return 1.0;
   case 1:
   return clamp(vec2(transpose(mat4(1.0))), vec2(mat4(uv, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)), vec2(transpose(mat4(1.0)))).y;
  }
}
void main()
{
 vec2 brick_inline_return_value_2 = vec2(1.0);
 vec2 uv = vec2(1.0);
 uv = gl_FragCoord.xy;
 brick_inline_return_value_2 = fract(uv);
 _GLF_color = vec4(vec3(patternize(brick_inline_return_value_2)), 1.0);
}
