; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 188
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %186
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "coord"
               OpName %12 "gl_FragCoord"
               OpName %16 "res"
               OpName %21 "buf1"
               OpMemberName %21 0 "_GLF_uniform_int_values"
               OpName %23 ""
               OpName %41 "i"
               OpName %51 "j"
               OpName %59 "a"
               OpName %66 "f0"
               OpName %73 "indexable"
               OpName %77 "indexable"
               OpName %81 "indexable"
               OpName %85 "f1"
               OpName %87 "indexable"
               OpName %91 "indexable"
               OpName %95 "indexable"
               OpName %99 "v0"
               OpName %102 "v1"
               OpName %106 "tex"
               OpName %114 "v2"
               OpName %119 "indexable"
               OpName %123 "v3"
               OpName %128 "indexable"
               OpName %132 "v4"
               OpName %149 "indexable"
               OpName %153 "v5"
               OpName %158 "v6"
               OpName %169 "buf0"
               OpMemberName %169 0 "_GLF_uniform_float_values"
               OpName %171 ""
               OpName %186 "_GLF_color"
               OpDecorate %12 BuiltIn FragCoord
               OpDecorate %20 ArrayStride 16
               OpMemberDecorate %21 0 Offset 0
               OpDecorate %21 Block
               OpDecorate %23 DescriptorSet 0
               OpDecorate %23 Binding 1
               OpDecorate %106 RelaxedPrecision
               OpDecorate %106 DescriptorSet 0
               OpDecorate %106 Binding 2
               OpDecorate %107 RelaxedPrecision
               OpDecorate %109 RelaxedPrecision
               OpDecorate %110 RelaxedPrecision
               OpDecorate %111 RelaxedPrecision
               OpDecorate %115 RelaxedPrecision
               OpDecorate %117 RelaxedPrecision
               OpDecorate %124 RelaxedPrecision
               OpDecorate %126 RelaxedPrecision
               OpDecorate %133 RelaxedPrecision
               OpDecorate %147 RelaxedPrecision
               OpDecorate %168 ArrayStride 16
               OpMemberDecorate %169 0 Offset 0
               OpDecorate %169 Block
               OpDecorate %171 DescriptorSet 0
               OpDecorate %171 Binding 0
               OpDecorate %186 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeVector %6 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %15 = OpTypePointer Function %10
         %17 = OpTypeInt 32 1
         %18 = OpTypeInt 32 0
         %19 = OpConstant %18 2
         %20 = OpTypeArray %17 %19
         %21 = OpTypeStruct %20
         %22 = OpTypePointer Uniform %21
         %23 = OpVariable %22 Uniform
         %24 = OpConstant %17 0
         %25 = OpTypePointer Uniform %17
         %29 = OpConstant %17 1
         %40 = OpTypePointer Function %17
         %48 = OpConstant %17 3
         %49 = OpTypeBool
         %63 = OpConstant %17 9
         %65 = OpTypePointer Function %6
         %67 = OpConstant %18 9
         %68 = OpTypeArray %6 %67
         %69 = OpConstant %6 0
         %70 = OpConstantComposite %68 %69 %69 %69 %69 %69 %69 %69 %69 %69
         %72 = OpTypePointer Function %68
        %103 = OpTypeImage %6 2D 0 0 0 1 Unknown
        %104 = OpTypeSampledImage %103
        %105 = OpTypePointer UniformConstant %104
        %106 = OpVariable %105 UniformConstant
        %154 = OpConstant %6 1
        %155 = OpConstantComposite %10 %154 %154 %154 %154
        %167 = OpConstant %18 1
        %168 = OpTypeArray %6 %167
        %169 = OpTypeStruct %168
        %170 = OpTypePointer Uniform %169
        %171 = OpVariable %170 Uniform
        %172 = OpTypePointer Uniform %6
        %185 = OpTypePointer Output %10
        %186 = OpVariable %185 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %16 = OpVariable %15 Function
         %41 = OpVariable %40 Function
         %51 = OpVariable %40 Function
         %59 = OpVariable %40 Function
         %66 = OpVariable %65 Function
         %73 = OpVariable %72 Function
         %77 = OpVariable %72 Function
         %81 = OpVariable %72 Function
         %85 = OpVariable %65 Function
         %87 = OpVariable %72 Function
         %91 = OpVariable %72 Function
         %95 = OpVariable %72 Function
         %99 = OpVariable %15 Function
        %102 = OpVariable %15 Function
        %114 = OpVariable %15 Function
        %119 = OpVariable %72 Function
        %123 = OpVariable %15 Function
        %128 = OpVariable %72 Function
        %132 = OpVariable %15 Function
        %149 = OpVariable %72 Function
        %153 = OpVariable %15 Function
        %158 = OpVariable %15 Function
         %13 = OpLoad %10 %12
         %14 = OpVectorShuffle %7 %13 %13 0 1
               OpStore %9 %14
         %26 = OpAccessChain %25 %23 %24 %24
         %27 = OpLoad %17 %26
         %28 = OpConvertSToF %6 %27
         %30 = OpAccessChain %25 %23 %24 %29
         %31 = OpLoad %17 %30
         %32 = OpConvertSToF %6 %31
         %33 = OpAccessChain %25 %23 %24 %29
         %34 = OpLoad %17 %33
         %35 = OpConvertSToF %6 %34
         %36 = OpAccessChain %25 %23 %24 %24
         %37 = OpLoad %17 %36
         %38 = OpConvertSToF %6 %37
         %39 = OpCompositeConstruct %10 %28 %32 %35 %38
               OpStore %16 %39
               OpStore %41 %24
               OpBranch %42
         %42 = OpLabel
               OpLoopMerge %44 %45 None
               OpBranch %46
         %46 = OpLabel
         %47 = OpLoad %17 %41
         %50 = OpSLessThan %49 %47 %48
               OpBranchConditional %50 %43 %44
         %43 = OpLabel
               OpStore %51 %24
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %17 %51
         %58 = OpSLessThan %49 %57 %48
               OpBranchConditional %58 %53 %54
         %53 = OpLabel
         %60 = OpLoad %17 %41
         %61 = OpLoad %17 %51
         %62 = OpIAdd %17 %60 %61
         %64 = OpExtInst %17 %1 SClamp %62 %24 %63
               OpStore %59 %64
         %71 = OpLoad %17 %59
               OpStore %73 %70
         %74 = OpAccessChain %65 %73 %71
         %75 = OpLoad %6 %74
         %76 = OpLoad %17 %59
               OpStore %77 %70
         %78 = OpAccessChain %65 %77 %76
         %79 = OpLoad %6 %78
         %80 = OpLoad %17 %59
               OpStore %81 %70
         %82 = OpAccessChain %65 %81 %80
         %83 = OpLoad %6 %82
         %84 = OpExtInst %6 %1 FClamp %75 %79 %83
               OpStore %66 %84
         %86 = OpLoad %17 %59
               OpStore %87 %70
         %88 = OpAccessChain %65 %87 %86
         %89 = OpLoad %6 %88
         %90 = OpLoad %17 %59
               OpStore %91 %70
         %92 = OpAccessChain %65 %91 %90
         %93 = OpLoad %6 %92
         %94 = OpLoad %17 %59
               OpStore %95 %70
         %96 = OpAccessChain %65 %95 %94
         %97 = OpLoad %6 %96
         %98 = OpExtInst %6 %1 FClamp %89 %93 %97
               OpStore %85 %98
        %100 = OpLoad %6 %66
        %101 = OpCompositeConstruct %10 %100 %100 %100 %100
               OpStore %99 %101
        %107 = OpLoad %104 %106
        %108 = OpLoad %17 %41
        %109 = OpConvertSToF %6 %108
        %110 = OpCompositeConstruct %7 %109 %109
        %111 = OpImageSampleImplicitLod %10 %107 %110
        %112 = OpLoad %6 %85
        %113 = OpVectorTimesScalar %10 %111 %112
               OpStore %102 %113
        %115 = OpLoad %104 %106
        %116 = OpLoad %7 %9
        %117 = OpImageSampleImplicitLod %10 %115 %116
        %118 = OpLoad %17 %59
               OpStore %119 %70
        %120 = OpAccessChain %65 %119 %118
        %121 = OpLoad %6 %120
        %122 = OpVectorTimesScalar %10 %117 %121
               OpStore %114 %122
        %124 = OpLoad %104 %106
        %125 = OpLoad %7 %9
        %126 = OpImageSampleImplicitLod %10 %124 %125
        %127 = OpLoad %17 %59
               OpStore %128 %70
        %129 = OpAccessChain %65 %128 %127
        %130 = OpLoad %6 %129
        %131 = OpVectorTimesScalar %10 %126 %130
               OpStore %123 %131
        %133 = OpLoad %104 %106
        %134 = OpLoad %7 %9
        %135 = OpLoad %17 %41
        %136 = OpAccessChain %25 %23 %24 %24
        %137 = OpLoad %17 %136
        %138 = OpISub %17 %135 %137
        %139 = OpConvertSToF %6 %138
        %140 = OpLoad %17 %51
        %141 = OpAccessChain %25 %23 %24 %24
        %142 = OpLoad %17 %141
        %143 = OpISub %17 %140 %142
        %144 = OpConvertSToF %6 %143
        %145 = OpCompositeConstruct %7 %139 %144
        %146 = OpFAdd %7 %134 %145
        %147 = OpImageSampleImplicitLod %10 %133 %146
        %148 = OpLoad %17 %59
               OpStore %149 %70
        %150 = OpAccessChain %65 %149 %148
        %151 = OpLoad %6 %150
        %152 = OpVectorTimesScalar %10 %147 %151
               OpStore %132 %152
        %156 = OpLoad %10 %114
        %157 = OpExtInst %10 %1 FMin %155 %156
               OpStore %153 %157
        %159 = OpLoad %10 %123
        %160 = OpLoad %10 %153
        %161 = OpExtInst %10 %1 FMin %159 %160
               OpStore %158 %161
        %162 = OpLoad %10 %99
        %163 = OpLoad %10 %102
        %164 = OpExtInst %10 %1 FMin %162 %163
        %165 = OpLoad %10 %158
        %166 = OpExtInst %10 %1 FMin %164 %165
        %173 = OpAccessChain %172 %171 %24 %24
        %174 = OpLoad %6 %173
        %175 = OpCompositeConstruct %10 %174 %174 %174 %174
        %176 = OpFAdd %10 %166 %175
        %177 = OpLoad %10 %132
        %178 = OpExtInst %10 %1 FMin %176 %177
        %179 = OpLoad %10 %16
        %180 = OpFAdd %10 %179 %178
               OpStore %16 %180
               OpBranch %55
         %55 = OpLabel
        %181 = OpLoad %17 %51
        %182 = OpIAdd %17 %181 %29
               OpStore %51 %182
               OpBranch %52
         %54 = OpLabel
               OpBranch %45
         %45 = OpLabel
        %183 = OpLoad %17 %41
        %184 = OpIAdd %17 %183 %29
               OpStore %41 %184
               OpBranch %42
         %44 = OpLabel
        %187 = OpLoad %10 %16
               OpStore %186 %187
               OpReturn
               OpFunctionEnd
