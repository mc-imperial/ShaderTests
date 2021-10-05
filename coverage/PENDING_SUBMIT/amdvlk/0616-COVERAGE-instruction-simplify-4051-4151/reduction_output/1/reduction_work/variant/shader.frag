#version 320 es

precision highp float;
precision highp int;

layout(set = 0, binding = 0) uniform sampler2D tex;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    ivec2 ipos = ivec2(gl_FragCoord.xy);
    int a = (ipos.x & 5) + ((ipos.y & 5) | (ipos.x & 10));

    while(a > 3)
    {
        vec4 v = texture(tex, vec2(1.0));

        while(v.x > 2.0)
        {
        }

        a -= 4;
    }

    if (a >= 0 && a < 4)
        _GLF_color = vec4[4](vec4(1, 0, 0, 1), vec4(1, 0, 0, 1), vec4(1, 0, 0, 1), vec4(1, 0, 0, 1))[a];
    else
        _GLF_color = vec4(0);
}
