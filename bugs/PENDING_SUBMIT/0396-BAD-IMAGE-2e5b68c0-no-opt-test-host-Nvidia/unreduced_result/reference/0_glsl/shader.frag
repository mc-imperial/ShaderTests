#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 _GLF_color = texture(tex, gl_FragCoord.xy * (1.0 / 256.0));
}
