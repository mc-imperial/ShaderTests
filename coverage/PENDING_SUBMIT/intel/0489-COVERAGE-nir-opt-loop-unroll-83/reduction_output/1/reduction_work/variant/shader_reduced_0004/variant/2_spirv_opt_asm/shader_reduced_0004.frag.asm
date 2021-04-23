; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 189
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %104 %170
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func0(i1;"
               OpName %9 "x"
               OpName %12 "func1("
               OpName %18 "m"
               OpName %33 "buf2"
               OpMemberName %33 0 "one"
               OpName %35 ""
               OpName %43 "buf0"
               OpMemberName %43 0 "_GLF_uniform_float_values"
               OpName %45 ""
               OpName %61 "i"
               OpName %73 "buf1"
               OpMemberName %73 0 "_GLF_uniform_int_values"
               OpName %75 ""
               OpName %104 "gl_FragCoord"
               OpName %112 "param"
               OpName %170 "_GLF_color"
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 2
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 0
               OpDecorate %72 ArrayStride 16
               OpMemberDecorate %73 0 Offset 0
               OpDecorate %73 Block
               OpDecorate %75 DescriptorSet 0
               OpDecorate %75 Binding 1
               OpDecorate %104 BuiltIn FragCoord
               OpDecorate %170 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %2 %7
         %14 = OpTypeFloat 32
         %15 = OpTypeVector %14 2
         %16 = OpTypeMatrix %15 4
         %17 = OpTypePointer Private %16
         %18 = OpVariable %17 Private
         %19 = OpConstant %14 0
         %20 = OpConstantComposite %15 %19 %19
         %21 = OpConstantComposite %16 %20 %20 %20 %20
         %22 = OpTypeBool
         %24 = OpConstant %6 1
         %33 = OpTypeStruct %14
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpConstant %6 0
         %37 = OpTypePointer Uniform %14
         %40 = OpTypeInt 32 0
         %41 = OpConstant %40 1
         %42 = OpTypeArray %14 %41
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %68 = OpConstant %6 2
         %71 = OpConstant %40 4
         %72 = OpTypeArray %6 %71
         %73 = OpTypeStruct %72
         %74 = OpTypePointer Uniform %73
         %75 = OpVariable %74 Uniform
         %76 = OpTypePointer Uniform %6
         %81 = OpConstant %6 3
         %86 = OpConstant %6 4
         %95 = OpTypePointer Private %14
        %102 = OpTypeVector %14 4
        %103 = OpTypePointer Input %102
        %104 = OpVariable %103 Input
        %105 = OpTypePointer Input %14
        %141 = OpConstant %14 1
        %149 = OpTypeVector %22 2
        %169 = OpTypePointer Output %102
        %170 = OpVariable %169 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %18 %21
        %114 = OpFunctionCall %2 %12
        %115 = OpFunctionCall %2 %12
        %116 = OpLoad %16 %18
        %117 = OpAccessChain %76 %75 %36 %36
        %118 = OpLoad %6 %117
        %119 = OpConvertSToF %14 %118
        %120 = OpAccessChain %76 %75 %36 %36
        %121 = OpLoad %6 %120
        %122 = OpConvertSToF %14 %121
        %123 = OpAccessChain %76 %75 %36 %24
        %124 = OpLoad %6 %123
        %125 = OpConvertSToF %14 %124
        %126 = OpAccessChain %76 %75 %36 %24
        %127 = OpLoad %6 %126
        %128 = OpConvertSToF %14 %127
        %129 = OpAccessChain %76 %75 %36 %36
        %130 = OpLoad %6 %129
        %131 = OpConvertSToF %14 %130
        %132 = OpAccessChain %76 %75 %36 %36
        %133 = OpLoad %6 %132
        %134 = OpConvertSToF %14 %133
        %135 = OpAccessChain %76 %75 %36 %36
        %136 = OpLoad %6 %135
        %137 = OpConvertSToF %14 %136
        %138 = OpAccessChain %76 %75 %36 %36
        %139 = OpLoad %6 %138
        %140 = OpConvertSToF %14 %139
        %142 = OpCompositeConstruct %15 %119 %122
        %143 = OpCompositeConstruct %15 %125 %128
        %144 = OpCompositeConstruct %15 %131 %134
        %145 = OpCompositeConstruct %15 %137 %140
        %146 = OpCompositeConstruct %16 %142 %143 %144 %145
        %147 = OpCompositeExtract %15 %116 0
        %148 = OpCompositeExtract %15 %146 0
        %150 = OpFOrdEqual %149 %147 %148
        %151 = OpAll %22 %150
        %152 = OpCompositeExtract %15 %116 1
        %153 = OpCompositeExtract %15 %146 1
        %154 = OpFOrdEqual %149 %152 %153
        %155 = OpAll %22 %154
        %156 = OpLogicalAnd %22 %151 %155
        %157 = OpCompositeExtract %15 %116 2
        %158 = OpCompositeExtract %15 %146 2
        %159 = OpFOrdEqual %149 %157 %158
        %160 = OpAll %22 %159
        %161 = OpLogicalAnd %22 %156 %160
        %162 = OpCompositeExtract %15 %116 3
        %163 = OpCompositeExtract %15 %146 3
        %164 = OpFOrdEqual %149 %162 %163
        %165 = OpAll %22 %164
        %166 = OpLogicalAnd %22 %161 %165
               OpSelectionMerge %168 None
               OpBranchConditional %166 %167 %184
        %167 = OpLabel
        %171 = OpAccessChain %76 %75 %36 %81
        %172 = OpLoad %6 %171
        %173 = OpConvertSToF %14 %172
        %174 = OpAccessChain %76 %75 %36 %36
        %175 = OpLoad %6 %174
        %176 = OpConvertSToF %14 %175
        %177 = OpAccessChain %76 %75 %36 %36
        %178 = OpLoad %6 %177
        %179 = OpConvertSToF %14 %178
        %180 = OpAccessChain %76 %75 %36 %81
        %181 = OpLoad %6 %180
        %182 = OpConvertSToF %14 %181
        %183 = OpCompositeConstruct %102 %173 %176 %179 %182
               OpStore %170 %183
               OpBranch %168
        %184 = OpLabel
        %185 = OpAccessChain %76 %75 %36 %36
        %186 = OpLoad %6 %185
        %187 = OpConvertSToF %14 %186
        %188 = OpCompositeConstruct %102 %187 %187 %187 %187
               OpStore %170 %188
               OpBranch %168
        %168 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %2 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %61 = OpVariable %7 Function
         %23 = OpLoad %6 %9
         %25 = OpSLessThan %22 %23 %24
         %26 = OpLogicalNot %22 %25
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %28
         %27 = OpLabel
         %29 = OpLoad %6 %9
         %30 = OpSGreaterThan %22 %29 %24
               OpSelectionMerge %32 None
               OpBranchConditional %30 %31 %32
         %31 = OpLabel
         %38 = OpAccessChain %37 %35 %36
         %39 = OpLoad %14 %38
         %46 = OpAccessChain %37 %45 %36 %36
         %47 = OpLoad %14 %46
         %48 = OpFOrdGreaterThan %22 %39 %47
               OpBranch %32
         %32 = OpLabel
         %49 = OpPhi %22 %30 %27 %48 %31
               OpBranch %28
         %28 = OpLabel
         %50 = OpPhi %22 %25 %11 %49 %32
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %52
         %51 = OpLabel
               OpReturn
         %52 = OpLabel
         %54 = OpAccessChain %37 %35 %36
         %55 = OpLoad %14 %54
         %56 = OpAccessChain %37 %45 %36 %36
         %57 = OpLoad %14 %56
         %58 = OpFOrdEqual %22 %55 %57
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %60
         %59 = OpLabel
               OpStore %61 %36
               OpBranch %62
         %62 = OpLabel
         %67 = OpLoad %6 %61
         %69 = OpSLessThan %22 %67 %68
               OpLoopMerge %64 %63 None
               OpBranchConditional %69 %63 %64
         %63 = OpLabel
         %70 = OpLoad %6 %9
         %77 = OpAccessChain %76 %75 %36 %36
         %78 = OpLoad %6 %77
         %79 = OpAccessChain %76 %75 %36 %68
         %80 = OpLoad %6 %79
         %82 = OpAccessChain %76 %75 %36 %81
         %83 = OpLoad %6 %82
         %84 = OpISub %6 %80 %83
         %85 = OpExtInst %6 %1 SClamp %70 %78 %84
         %87 = OpAccessChain %76 %75 %36 %81
         %88 = OpLoad %6 %87
         %89 = OpISub %6 %86 %88
         %90 = OpExtInst %6 %1 SClamp %85 %36 %89
         %91 = OpLoad %6 %61
         %92 = OpExtInst %6 %1 SClamp %91 %36 %24
         %93 = OpAccessChain %37 %45 %36 %36
         %94 = OpLoad %14 %93
         %96 = OpAccessChain %95 %18 %90 %92
         %97 = OpLoad %14 %96
         %98 = OpFAdd %14 %97 %94
         %99 = OpAccessChain %95 %18 %90 %92
               OpStore %99 %98
        %100 = OpLoad %6 %61
        %101 = OpIAdd %6 %100 %24
               OpStore %61 %101
               OpBranch %62
         %64 = OpLabel
               OpBranch %60
         %60 = OpLabel
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %2 None %3
         %13 = OpLabel
        %112 = OpVariable %7 Function
        %106 = OpAccessChain %105 %104 %41
        %107 = OpLoad %14 %106
        %108 = OpFOrdLessThan %22 %107 %19
               OpSelectionMerge %110 None
               OpBranchConditional %108 %109 %110
        %109 = OpLabel
               OpReturn
        %110 = OpLabel
               OpStore %112 %24
        %113 = OpFunctionCall %2 %10 %112
               OpReturn
               OpFunctionEnd
