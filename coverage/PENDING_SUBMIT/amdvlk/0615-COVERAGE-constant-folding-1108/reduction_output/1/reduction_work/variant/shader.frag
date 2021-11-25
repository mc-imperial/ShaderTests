#version 320 es

precision highp float;
precision highp int;

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

struct S
{
    int data;
};

layout(set = 0, binding = 0) uniform sampler2D tex;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = 1;
    int b = 1;
    vec4 v = vec4(1.0);
    S s = S(1);

    while(v.x + 1.0 > 0.0 && s.data <= 1 && _GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;

        if(b++ > 3)
        {
            break;
        }

        v = texture(tex, vec2(1.0));
        s.data++;
    }

    if (s.data == 2)
        _GLF_color = vec4(float(a), 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
