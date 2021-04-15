#version 320 es

#define LOOP for (int i = 0; i < 1; i++)

precision highp int;
precision highp float;

const int _GLF_global_loop_bound = 100;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    mat2x3 m23 = mat2x3(0);
    mat2x4 m24 = mat2x4(0);
    mat3x2 m32 = mat3x2(0);
    mat3 m33 = mat3(0);
    mat3x4 m34 = mat3x4(0);
    mat4x2 m42 = mat4x2(0);
    mat4x3 m43 = mat4x3(0);
    mat4 m44 = mat4(0);

    // Each loop iterates just once.
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP {
        // Run until _GLF_global_loop_bound is 98.
        do
        {
            _GLF_global_loop_count++;
        }
        while(_GLF_global_loop_count < _GLF_global_loop_bound - 2);

        // Write one to the first matrix element.
        m23[i][i] = 1.0;
        m24[i][i] = 1.0;
        m32[i][i] = 1.0;
        m33[i][i] = 1.0;
        m34[i][i] = 1.0;
        m42[i][i] = 1.0;
        m43[i][i] = 1.0;
        m44[i][i] = 1.0;
    } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } }

    float sum = 0.0;
    // Iterate twice. The first iteration reads one and the second zero.
    for(int r = 0; _GLF_global_loop_count < _GLF_global_loop_bound; r++)
    {
        _GLF_global_loop_count++;
        sum += m23[0][r];
        sum += m24[0][r];
        sum += m32[0][r];
        sum += m33[0][r];
        sum += m34[0][r];
        sum += m42[0][r];
        sum += m43[0][r];
        sum += m44[0][r];
    }

    // Always true.
    if (sum == 8.0)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
