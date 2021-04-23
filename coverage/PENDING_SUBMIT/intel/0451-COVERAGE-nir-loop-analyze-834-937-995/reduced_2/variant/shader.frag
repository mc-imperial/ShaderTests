#version 320 es

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 int i = 1;
 vec4 texel = vec4(1.0);
 while(! (false || (! bool(bvec4(texel.z > 1.0 && i < 1, true, true, true)))))
  {
   texel = texture(tex, vec2(1.0));
   i ++;
  }
 _GLF_color = texel;
}
