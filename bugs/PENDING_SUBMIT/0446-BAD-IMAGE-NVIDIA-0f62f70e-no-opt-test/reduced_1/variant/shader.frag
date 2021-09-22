#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 int i = 0;
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 vec4 texel = texture(tex, coord);
 while(texel.x + texel.y + texel.z > 1.0 && i < 16)
  {
   coord = texel.xz + texel.yy;
   coord = floor(coord * 256.0) / 256.0;
   texel = min((texture(tex, coord)) * mat4(1.0), texture(tex, coord));
   i ++;
  }
 _GLF_color = texel;
}
