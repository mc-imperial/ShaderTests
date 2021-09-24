#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_4 _GLF_uniform_int_values[1]
#define _int_35 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]
#define _float_2_0 _GLF_uniform_float_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 0.0, 2.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[3];
};

// Contents of _GLF_uniform_int_values: [1, 4, 35, 0]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

const int _GLF_global_loop_bound = 100;
int _GLF_global_loop_count = 0;

struct S
{
    int data0;
    int data1;
};

int a = 1;

S arr[10] = S[10](S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1));

layout(location = 0) out vec4 _GLF_color;

// Has no effect because the original value is always one. Also this function is never called.
void func0(inout S s)
{
    s.data0 = _int_1;
}

// Always returns vec4(fract(x), 1, 1).
vec3 func1(float x)
{
    // Always false because x is the result of a call to sin.
    if(x > _float_1_0)
    {
        return vec3(_int_0);
    }

    return vec3(fract(x), _float_1_0, _float_1_0);
}

vec3 func2()
{
    // Always true.
    if(gl_FragCoord.x > _float_0_0)
    {
        // a becomes one.
        a = S[10](S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1), S(_int_1, _int_1))[a].data1;
    }

    vec3 v0 = vec3(_float_1_0);
    for(int i = _int_35; i >= _int_1 && _GLF_global_loop_count < _GLF_global_loop_bound; i--)
    {
        _GLF_global_loop_count++;

        vec3 v1 = func1(sin(float(i)));

        // Always true.
        if(length(v1) >= _float_0_0)
        {
            v0 = v1;
        }
    }

    return v0;
}

void main()
{
    a = _int_4;
    func2();
    vec3 v = func2();

    // Always true.
    if(gl_FragCoord.x > _float_0_0)
    {
        // Always false.
        if(arr[a].data1 == 0)
        {
            func0(arr[a]);
            return;
        }
    }

    // Guaranteed to be true because of an identical check in func2.
    if(length(v) > _float_0_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
