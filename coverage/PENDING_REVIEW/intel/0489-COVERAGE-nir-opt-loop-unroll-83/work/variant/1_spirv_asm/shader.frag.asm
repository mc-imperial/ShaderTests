; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 176
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %85 %157
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
               OpName %85 "gl_FragCoord"
               OpName %93 "param"
               OpName %100 "buf1"
               OpMemberName %100 0 "_GLF_uniform_int_values"
               OpName %102 ""
               OpName %157 "_GLF_color"
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 2
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 0
               OpDecorate %85 BuiltIn FragCoord
               OpDecorate %99 ArrayStride 16
               OpMemberDecorate %100 0 Offset 0
               OpDecorate %100 Block
               OpDecorate %102 DescriptorSet 0
               OpDecorate %102 Binding 1
               OpDecorate %157 Location 0
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
         %71 = OpConstant %6 3
         %76 = OpTypePointer Private %14
         %83 = OpTypeVector %14 4
         %84 = OpTypePointer Input %83
         %85 = OpVariable %84 Input
         %86 = OpTypePointer Input %14
         %98 = OpConstant %40 4
         %99 = OpTypeArray %6 %98
        %100 = OpTypeStruct %99
        %101 = OpTypePointer Uniform %100
        %102 = OpVariable %101 Uniform
        %103 = OpTypePointer Uniform %6
        %128 = OpConstant %14 1
        %136 = OpTypeVector %22 2
        %156 = OpTypePointer Output %83
        %157 = OpVariable %156 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %18 %21
         %95 = OpFunctionCall %2 %12
         %96 = OpFunctionCall %2 %12
         %97 = OpLoad %16 %18
        %104 = OpAccessChain %103 %102 %36 %36
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %14 %105
        %107 = OpAccessChain %103 %102 %36 %36
        %108 = OpLoad %6 %107
        %109 = OpConvertSToF %14 %108
        %110 = OpAccessChain %103 %102 %36 %24
        %111 = OpLoad %6 %110
        %112 = OpConvertSToF %14 %111
        %113 = OpAccessChain %103 %102 %36 %24
        %114 = OpLoad %6 %113
        %115 = OpConvertSToF %14 %114
        %116 = OpAccessChain %103 %102 %36 %36
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %14 %117
        %119 = OpAccessChain %103 %102 %36 %36
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %14 %120
        %122 = OpAccessChain %103 %102 %36 %36
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %14 %123
        %125 = OpAccessChain %103 %102 %36 %36
        %126 = OpLoad %6 %125
        %127 = OpConvertSToF %14 %126
        %129 = OpCompositeConstruct %15 %106 %109
        %130 = OpCompositeConstruct %15 %112 %115
        %131 = OpCompositeConstruct %15 %118 %121
        %132 = OpCompositeConstruct %15 %124 %127
        %133 = OpCompositeConstruct %16 %129 %130 %131 %132
        %134 = OpCompositeExtract %15 %97 0
        %135 = OpCompositeExtract %15 %133 0
        %137 = OpFOrdEqual %136 %134 %135
        %138 = OpAll %22 %137
        %139 = OpCompositeExtract %15 %97 1
        %140 = OpCompositeExtract %15 %133 1
        %141 = OpFOrdEqual %136 %139 %140
        %142 = OpAll %22 %141
        %143 = OpLogicalAnd %22 %138 %142
        %144 = OpCompositeExtract %15 %97 2
        %145 = OpCompositeExtract %15 %133 2
        %146 = OpFOrdEqual %136 %144 %145
        %147 = OpAll %22 %146
        %148 = OpLogicalAnd %22 %143 %147
        %149 = OpCompositeExtract %15 %97 3
        %150 = OpCompositeExtract %15 %133 3
        %151 = OpFOrdEqual %136 %149 %150
        %152 = OpAll %22 %151
        %153 = OpLogicalAnd %22 %148 %152
               OpSelectionMerge %155 None
               OpBranchConditional %153 %154 %171
        %154 = OpLabel
        %158 = OpAccessChain %103 %102 %36 %71
        %159 = OpLoad %6 %158
        %160 = OpConvertSToF %14 %159
        %161 = OpAccessChain %103 %102 %36 %36
        %162 = OpLoad %6 %161
        %163 = OpConvertSToF %14 %162
        %164 = OpAccessChain %103 %102 %36 %36
        %165 = OpLoad %6 %164
        %166 = OpConvertSToF %14 %165
        %167 = OpAccessChain %103 %102 %36 %71
        %168 = OpLoad %6 %167
        %169 = OpConvertSToF %14 %168
        %170 = OpCompositeConstruct %83 %160 %163 %166 %169
               OpStore %157 %170
               OpBranch %155
        %171 = OpLabel
        %172 = OpAccessChain %103 %102 %36 %36
        %173 = OpLoad %6 %172
        %174 = OpConvertSToF %14 %173
        %175 = OpCompositeConstruct %83 %174 %174 %174 %174
               OpStore %157 %175
               OpBranch %155
        %155 = OpLabel
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
               OpLoopMerge %64 %65 None
               OpBranch %66
         %66 = OpLabel
         %67 = OpLoad %6 %61
         %69 = OpSLessThan %22 %67 %68
               OpBranchConditional %69 %63 %64
         %63 = OpLabel
         %70 = OpLoad %6 %9
         %72 = OpExtInst %6 %1 SClamp %70 %36 %71
         %73 = OpLoad %6 %61
         %74 = OpAccessChain %37 %45 %36 %36
         %75 = OpLoad %14 %74
         %77 = OpAccessChain %76 %18 %72 %73
         %78 = OpLoad %14 %77
         %79 = OpFAdd %14 %78 %75
         %80 = OpAccessChain %76 %18 %72 %73
               OpStore %80 %79
               OpBranch %65
         %65 = OpLabel
         %81 = OpLoad %6 %61
         %82 = OpIAdd %6 %81 %24
               OpStore %61 %82
               OpBranch %62
         %64 = OpLabel
               OpBranch %60
         %60 = OpLabel
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %2 None %3
         %13 = OpLabel
         %93 = OpVariable %7 Function
         %87 = OpAccessChain %86 %85 %41
         %88 = OpLoad %14 %87
         %89 = OpFOrdLessThan %22 %88 %19
               OpSelectionMerge %91 None
               OpBranchConditional %89 %90 %91
         %90 = OpLabel
               OpReturn
         %91 = OpLabel
               OpStore %93 %24
         %94 = OpFunctionCall %2 %10 %93
               OpReturn
               OpFunctionEnd
