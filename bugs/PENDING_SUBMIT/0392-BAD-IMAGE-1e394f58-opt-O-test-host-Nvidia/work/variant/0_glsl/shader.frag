#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 int i = 0;
 vec2 uvstep = vec2(1.0) * (1.0 / 256.0);
 float slope = 2.0 / 256.0;
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 // mat3 is converted to vec4 and divided by vec4(1.0).
 // vec4(4 digits) takes only the four first values from mat3(9 digits), in this case
 // the first four values are the texture colour values (rgba) from the given coordinate.
 // Therefore the last five values in mat3 are not used.
 // This is semantically same as in reference shader.
 float refh = ((vec4(mat3(texture(tex, coord), 1.0, 1.0, 0.0, 0.0, 0.0))) / vec4(1.0, 1.0, 1.0, 1.0)).y;
 coord -= uvstep;
 refh += slope;
 float h = texture(tex, coord).y;
 while(h < refh && i < 32)
  {
   coord -= uvstep;
   refh += slope;
   h = texture(tex, coord).y;
   i ++;
  }
 _GLF_color = vec4(vec3(float(i) * (1.0 / 32.0)), 1.0);
}
