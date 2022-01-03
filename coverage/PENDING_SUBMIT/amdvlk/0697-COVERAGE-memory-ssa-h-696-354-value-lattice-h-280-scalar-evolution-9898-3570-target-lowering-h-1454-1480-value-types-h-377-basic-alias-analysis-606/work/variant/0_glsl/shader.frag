#version 320 es
#define _int_3 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _int_14 _GLF_uniform_int_values[4]
#define _int_15 _GLF_uniform_int_values[5]
#define _int_16 _GLF_uniform_int_values[6]
#define _int_17 _GLF_uniform_int_values[7]
#define _int_18 _GLF_uniform_int_values[8]
#define _int_19 _GLF_uniform_int_values[9]
#define _int_10 _GLF_uniform_int_values[10]
#define _int_0 _GLF_uniform_int_values[11]
#define _int_9 _GLF_uniform_int_values[12]
#define _int_5 _GLF_uniform_int_values[13]
#define _int_6 _GLF_uniform_int_values[14]
#define _int_7 _GLF_uniform_int_values[15]
#define _int_8 _GLF_uniform_int_values[16]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [3, 1, 2, 4, 14, 15, 16, 17, 18, 19, 10, 0, 9, 5, 6, 7, 8]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[17];
};

// Contents of two: 2.0
layout(set = 0, binding = 2) uniform buf2
{
    float two;
};

struct S
{
    int data;
    int leftIndex;
    int rightIndex;
};

layout(location = 0) out vec4 _GLF_color;

int data0[10] = int[10](0, 1, 2, 3, 4, 5, 6, 7, 8, 9), data1[10] = int[10](10, 11, 12, 13, 14, 15, 16, 17, 18, 19);

void func0(int from, int mid, int to)
{
    int k = _int_1, i = 1, j = _int_1;

    while(i <= mid)
    {
        if(i <= j)
        {
            _GLF_color = vec4(_int_1);

            int a = - _int_1;

            // Iterates once.
            while(a != _int_1)
            {
                a = S[10](S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3), S(_int_1, _int_2, _int_3))[clamp(a, _int_0, _int_9)].data;
            }
        }
        else
        {
            data1[k++] = data0[j++];
        }

        i++;
    }

    while(i < 5 && k < _int_10)
    {
        data1[k++] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9)[i++];
    }

    for(int i = from; i <= to; i++)
    {
        data0[i] = data1[i];
    }
}

int func1()
{
    int a = _int_1;

    for(int i = 1; i < 10; i *= 2)
    {
        for(int j = 1; j < 10; j += i)
        {
            func0(i, j, min(i + j, 10));
        }

        while(a < _int_5)
        {
            // v becomes (0, 0).
            ivec2 v = ivec2(vec2(_float_1_0) / two);

            // This loop is never iterated.
            while(v.x + v.y > _int_2)
            {
            }

            a++;
        }
    }
    return a;
}

void main()
{
    _GLF_color = vec4(_int_0);

    // Always true.
    if(func1() == _int_5)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }

    /*
    This python script was used to generate the reference values:

    data0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    data1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] 
        
    def func0(x, y, z):
        global data0
        global data1 
        k = 1
        i = 1
        j = 1

        while i <= y:
            if i > j:
                data1[k] = data0[j]
                k = k + 1
                j = j + 1
            i = i + 1

        while i < 5 and k < 10:
            data1[k] = i
            k = k + 1
            i = i + 1

       for i in range(x, z):
            data0[i] = data1[i]

    def func1():
        a = 1
        i = 1

        while i < 10:
            j = 1
            while j < 10:
                func0(i, j, min(i + j, 10))
                j = i + j
            while a < 5:
                a = a + 1
            i = 2 * i
        return a

       print(func1()) 
       print(data0)
       print(data1)
    */

    int ref0[10] = int[10](_int_0, _int_2, _int_3, _int_4, _int_14, _int_15, _int_16, _int_17, _int_18, _int_19);
    int ref1[10] = int[10](_int_10, _int_2, _int_3, _int_4, _int_14, _int_15, _int_16, _int_17, _int_18, _int_19);

    // Verify the global arrays against reference and set output to zero if the check fails.
    for(int i = _int_0; i < _int_10; i ++)
    {
        if(data0[i] != ref0[i] || data1[i] != ref1[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
