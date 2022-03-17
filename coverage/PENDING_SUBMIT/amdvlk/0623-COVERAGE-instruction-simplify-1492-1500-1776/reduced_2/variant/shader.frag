#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 vec4 texel = vec4(1.0);
 texel = texture(tex, vec2(1.0));
 _GLF_color = texel;
 vec2 GLF_live13coord = vec2(1.0);
 int GLF_live13i = 1;
 GLF_live13i = 0;
 while((GLF_live13i < 1 || GLF_live13coord.y > 1.0) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   _GLF_color = vec4(1.0);
   GLF_live13coord *= 2.0;
   GLF_live13i ++;
  }
}
