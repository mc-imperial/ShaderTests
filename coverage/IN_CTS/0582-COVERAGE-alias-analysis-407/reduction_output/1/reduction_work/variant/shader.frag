#version 320 es

precision highp float;
precision highp int;

const int _GLF_global_loop_bound = 50;
int _GLF_global_loop_count = 0;

int arr[32] = int[32](1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

layout(set = 0, binding = 0) uniform sampler2D tex;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    for(int i = 2; (i < 16) && (_GLF_global_loop_count < _GLF_global_loop_bound); i++)
    {
        _GLF_global_loop_count++;
        arr[i] = 0;
    }

    while(texture(tex, vec2(1.0)).a > 0.0 && _GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count++;

        ivec2 v = ivec2(1);

        if(arr[1] == 1)
        {
            arr[v.x + v.y * 16] = 2;
        }
    }

    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 0 && arr[17] == 2)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
