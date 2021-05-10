#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 color = vec3(1.0);
 vec3 palette_inline_return_value_0 = vec3(1.0);
 vec3 b = vec3(1.0);
 b = trunc(mix(vec3(1.0, 1.0, vec3(0.1)[1]), vec3(1.0, 1.0, (- 1.0)), bvec3(true, true, (gl_FragCoord.y < 1.0))));
 palette_inline_return_value_0 = fract(b);
 color -= palette_inline_return_value_0;
 _GLF_color = vec4(color, 1.0);
}
