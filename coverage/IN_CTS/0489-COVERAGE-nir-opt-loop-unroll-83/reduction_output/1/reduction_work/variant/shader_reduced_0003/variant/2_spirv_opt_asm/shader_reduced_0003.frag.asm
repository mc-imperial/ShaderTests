; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 199
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %114 %180
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
               OpName %64 "buf1"
               OpMemberName %64 0 "_GLF_uniform_int_values"
               OpName %66 ""
               OpName %114 "gl_FragCoord"
               OpName %122 "param"
               OpName %180 "_GLF_color"
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 2
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 0
               OpDecorate %63 ArrayStride 16
               OpMemberDecorate %64 0 Offset 0
               OpDecorate %64 Block
               OpDecorate %66 DescriptorSet 0
               OpDecorate %66 Binding 1
               OpDecorate %114 BuiltIn FragCoord
               OpDecorate %180 Location 0
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
         %62 = OpConstant %40 4
         %63 = OpTypeArray %6 %62
         %64 = OpTypeStruct %63
         %65 = OpTypePointer Uniform %64
         %66 = OpVariable %65 Uniform
         %67 = OpTypePointer Uniform %6
         %76 = OpConstant %6 2
         %83 = OpConstant %6 3
        %105 = OpTypePointer Private %14
        %112 = OpTypeVector %14 4
        %113 = OpTypePointer Input %112
        %114 = OpVariable %113 Input
        %115 = OpTypePointer Input %14
        %151 = OpConstant %14 1
        %159 = OpTypeVector %22 2
        %179 = OpTypePointer Output %112
        %180 = OpVariable %179 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %18 %21
        %124 = OpFunctionCall %2 %12
        %125 = OpFunctionCall %2 %12
        %126 = OpLoad %16 %18
        %127 = OpAccessChain %67 %66 %36 %36
        %128 = OpLoad %6 %127
        %129 = OpConvertSToF %14 %128
        %130 = OpAccessChain %67 %66 %36 %36
        %131 = OpLoad %6 %130
        %132 = OpConvertSToF %14 %131
        %133 = OpAccessChain %67 %66 %36 %24
        %134 = OpLoad %6 %133
        %135 = OpConvertSToF %14 %134
        %136 = OpAccessChain %67 %66 %36 %24
        %137 = OpLoad %6 %136
        %138 = OpConvertSToF %14 %137
        %139 = OpAccessChain %67 %66 %36 %36
        %140 = OpLoad %6 %139
        %141 = OpConvertSToF %14 %140
        %142 = OpAccessChain %67 %66 %36 %36
        %143 = OpLoad %6 %142
        %144 = OpConvertSToF %14 %143
        %145 = OpAccessChain %67 %66 %36 %36
        %146 = OpLoad %6 %145
        %147 = OpConvertSToF %14 %146
        %148 = OpAccessChain %67 %66 %36 %36
        %149 = OpLoad %6 %148
        %150 = OpConvertSToF %14 %149
        %152 = OpCompositeConstruct %15 %129 %132
        %153 = OpCompositeConstruct %15 %135 %138
        %154 = OpCompositeConstruct %15 %141 %144
        %155 = OpCompositeConstruct %15 %147 %150
        %156 = OpCompositeConstruct %16 %152 %153 %154 %155
        %157 = OpCompositeExtract %15 %126 0
        %158 = OpCompositeExtract %15 %156 0
        %160 = OpFOrdEqual %159 %157 %158
        %161 = OpAll %22 %160
        %162 = OpCompositeExtract %15 %126 1
        %163 = OpCompositeExtract %15 %156 1
        %164 = OpFOrdEqual %159 %162 %163
        %165 = OpAll %22 %164
        %166 = OpLogicalAnd %22 %161 %165
        %167 = OpCompositeExtract %15 %126 2
        %168 = OpCompositeExtract %15 %156 2
        %169 = OpFOrdEqual %159 %167 %168
        %170 = OpAll %22 %169
        %171 = OpLogicalAnd %22 %166 %170
        %172 = OpCompositeExtract %15 %126 3
        %173 = OpCompositeExtract %15 %156 3
        %174 = OpFOrdEqual %159 %172 %173
        %175 = OpAll %22 %174
        %176 = OpLogicalAnd %22 %171 %175
               OpSelectionMerge %178 None
               OpBranchConditional %176 %177 %194
        %177 = OpLabel
        %181 = OpAccessChain %67 %66 %36 %83
        %182 = OpLoad %6 %181
        %183 = OpConvertSToF %14 %182
        %184 = OpAccessChain %67 %66 %36 %36
        %185 = OpLoad %6 %184
        %186 = OpConvertSToF %14 %185
        %187 = OpAccessChain %67 %66 %36 %36
        %188 = OpLoad %6 %187
        %189 = OpConvertSToF %14 %188
        %190 = OpAccessChain %67 %66 %36 %83
        %191 = OpLoad %6 %190
        %192 = OpConvertSToF %14 %191
        %193 = OpCompositeConstruct %112 %183 %186 %189 %192
               OpStore %180 %193
               OpBranch %178
        %194 = OpLabel
        %195 = OpAccessChain %67 %66 %36 %36
        %196 = OpLoad %6 %195
        %197 = OpConvertSToF %14 %196
        %198 = OpCompositeConstruct %112 %197 %197 %197 %197
               OpStore %180 %198
               OpBranch %178
        %178 = OpLabel
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
         %68 = OpAccessChain %67 %66 %36 %36
         %69 = OpLoad %6 %68
               OpStore %61 %69
               OpBranch %70
         %70 = OpLabel
         %75 = OpLoad %6 %61
         %77 = OpSLessThan %22 %75 %76
               OpLoopMerge %72 %71 None
               OpBranchConditional %77 %71 %72
         %71 = OpLabel
         %78 = OpLoad %6 %9
         %79 = OpAccessChain %67 %66 %36 %36
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %67 %66 %36 %76
         %82 = OpLoad %6 %81
         %84 = OpAccessChain %67 %66 %36 %83
         %85 = OpLoad %6 %84
         %86 = OpISub %6 %82 %85
         %87 = OpExtInst %6 %1 SClamp %78 %80 %86
         %88 = OpAccessChain %67 %66 %36 %36
         %89 = OpLoad %6 %88
         %90 = OpAccessChain %67 %66 %36 %76
         %91 = OpLoad %6 %90
         %92 = OpISub %6 %91 %24
         %93 = OpExtInst %6 %1 SClamp %87 %89 %92
         %94 = OpLoad %6 %61
         %95 = OpAccessChain %67 %66 %36 %36
         %96 = OpLoad %6 %95
         %97 = OpAccessChain %67 %66 %36 %24
         %98 = OpLoad %6 %97
         %99 = OpAccessChain %67 %66 %36 %83
        %100 = OpLoad %6 %99
        %101 = OpISub %6 %98 %100
        %102 = OpExtInst %6 %1 SClamp %94 %96 %101
        %103 = OpAccessChain %37 %45 %36 %36
        %104 = OpLoad %14 %103
        %106 = OpAccessChain %105 %18 %93 %102
        %107 = OpLoad %14 %106
        %108 = OpFAdd %14 %107 %104
        %109 = OpAccessChain %105 %18 %93 %102
               OpStore %109 %108
        %110 = OpLoad %6 %61
        %111 = OpIAdd %6 %110 %24
               OpStore %61 %111
               OpBranch %70
         %72 = OpLabel
               OpBranch %60
         %60 = OpLabel
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %2 None %3
         %13 = OpLabel
        %122 = OpVariable %7 Function
        %116 = OpAccessChain %115 %114 %41
        %117 = OpLoad %14 %116
        %118 = OpFOrdLessThan %22 %117 %19
               OpSelectionMerge %120 None
               OpBranchConditional %118 %119 %120
        %119 = OpLabel
               OpReturn
        %120 = OpLabel
               OpStore %122 %24
        %123 = OpFunctionCall %2 %10 %122
               OpReturn
               OpFunctionEnd
