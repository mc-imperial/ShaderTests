#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 vec4 res = vec4(0.25);
 coord *= 2.0;
 int i = 0;
 while(i < 1 && coord.x > 1.0 || coord.y > 1.0)
  {
   if(coord.x > 1.0)
    coord.x -= 1.0;
   if(coord.y > 1.0)
    coord.y -= 1.0;
   coord *= 2.0;
   i ++;
  }
 if(coord.x < 1.0 && coord.y < 1.0)
  {
   res = texture(tex, coord);
  }
 _GLF_color = vec4(res.xyz, 1.0);
}
