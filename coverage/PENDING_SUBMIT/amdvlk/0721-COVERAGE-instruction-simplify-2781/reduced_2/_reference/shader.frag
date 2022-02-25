#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

const float weights[9] = float[9](1.0, 0.5, - 0.25, 0.5, 1.0, - 0.5, - 0.25, - 0.5, - 1.0);

void main()
{
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 float uvstep = 1.0 / 256.0;
 vec4 res = vec4(0);
 for(int i = 0; i < 3; i ++)
  {
   for(int j = 0; j < 3; j ++)
    {
     res += texture(tex, coord + vec2(float(i - 1) * uvstep, float(j - 1) * uvstep)) * weights[i * 3 + j];
    }
  }
 _GLF_color = vec4(res.xyz, 1.0);
}
