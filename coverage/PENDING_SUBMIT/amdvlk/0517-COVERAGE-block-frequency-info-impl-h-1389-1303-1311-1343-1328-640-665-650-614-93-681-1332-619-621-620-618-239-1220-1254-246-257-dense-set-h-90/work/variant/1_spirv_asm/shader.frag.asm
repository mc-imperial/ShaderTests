; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 110
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %25 %85
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(f1;"
               OpName %9 "x"
               OpName %25 "gl_FragCoord"
               OpName %33 "buf1"
               OpMemberName %33 0 "_GLF_uniform_float_values"
               OpName %35 ""
               OpName %75 "param"
               OpName %85 "_GLF_color"
               OpName %88 "buf0"
               OpMemberName %88 0 "_GLF_uniform_int_values"
               OpName %90 ""
               OpDecorate %25 BuiltIn FragCoord
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 1
               OpDecorate %85 Location 0
               OpDecorate %87 ArrayStride 16
               OpMemberDecorate %88 0 Offset 0
               OpDecorate %88 Block
               OpDecorate %90 DescriptorSet 0
               OpDecorate %90 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %17 = OpTypeBool
         %18 = OpConstantTrue %17
         %23 = OpTypeVector %6 4
         %24 = OpTypePointer Input %23
         %25 = OpVariable %24 Input
         %26 = OpTypeInt 32 0
         %27 = OpConstant %26 1
         %28 = OpTypePointer Input %6
         %31 = OpConstant %26 4
         %32 = OpTypeArray %6 %31
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpTypeInt 32 1
         %37 = OpConstant %36 0
         %38 = OpConstant %36 2
         %39 = OpTypePointer Uniform %6
         %49 = OpConstant %26 0
         %56 = OpConstant %36 3
         %62 = OpConstant %36 1
         %84 = OpTypePointer Output %23
         %85 = OpVariable %84 Output
         %86 = OpConstant %26 2
         %87 = OpTypeArray %36 %86
         %88 = OpTypeStruct %87
         %89 = OpTypePointer Uniform %88
         %90 = OpVariable %89 Uniform
         %91 = OpTypePointer Uniform %36
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %75 = OpVariable %7 Function
         %76 = OpAccessChain %28 %25 %49
         %77 = OpLoad %6 %76
               OpStore %75 %77
         %78 = OpFunctionCall %6 %10 %75
         %79 = OpAccessChain %39 %35 %37 %62
         %80 = OpLoad %6 %79
         %81 = OpFOrdEqual %17 %78 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %105
         %82 = OpLabel
         %92 = OpAccessChain %91 %90 %37 %37
         %93 = OpLoad %36 %92
         %94 = OpConvertSToF %6 %93
         %95 = OpAccessChain %91 %90 %37 %62
         %96 = OpLoad %36 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpAccessChain %91 %90 %37 %62
         %99 = OpLoad %36 %98
        %100 = OpConvertSToF %6 %99
        %101 = OpAccessChain %91 %90 %37 %37
        %102 = OpLoad %36 %101
        %103 = OpConvertSToF %6 %102
        %104 = OpCompositeConstruct %23 %94 %97 %100 %103
               OpStore %85 %104
               OpBranch %83
        %105 = OpLabel
        %106 = OpAccessChain %91 %90 %37 %62
        %107 = OpLoad %36 %106
        %108 = OpConvertSToF %6 %107
        %109 = OpCompositeConstruct %23 %108 %108 %108 %108
               OpStore %85 %109
               OpBranch %83
         %83 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
               OpBranch %12
         %12 = OpLabel
               OpLoopMerge %14 %15 None
               OpBranch %16
         %16 = OpLabel
               OpBranchConditional %18 %13 %14
         %13 = OpLabel
               OpBranch %19
         %19 = OpLabel
               OpLoopMerge %21 %22 None
               OpBranch %20
         %20 = OpLabel
         %29 = OpAccessChain %28 %25 %27
         %30 = OpLoad %6 %29
         %40 = OpAccessChain %39 %35 %37 %38
         %41 = OpLoad %6 %40
         %42 = OpFOrdLessThan %17 %30 %41
               OpSelectionMerge %44 None
               OpBranchConditional %42 %43 %44
         %43 = OpLabel
               OpBranch %45
         %45 = OpLabel
               OpLoopMerge %47 %48 None
               OpBranch %46
         %46 = OpLabel
               OpBranch %48
         %48 = OpLabel
         %50 = OpAccessChain %28 %25 %49
         %51 = OpLoad %6 %50
         %52 = OpAccessChain %39 %35 %37 %38
         %53 = OpLoad %6 %52
         %54 = OpFOrdLessThan %17 %51 %53
               OpBranchConditional %54 %45 %47
         %47 = OpLabel
               OpBranch %44
         %44 = OpLabel
         %55 = OpLoad %6 %9
         %57 = OpAccessChain %39 %35 %37 %56
         %58 = OpLoad %6 %57
         %59 = OpFOrdLessThan %17 %55 %58
               OpSelectionMerge %61 None
               OpBranchConditional %59 %60 %61
         %60 = OpLabel
         %63 = OpAccessChain %39 %35 %37 %62
         %64 = OpLoad %6 %63
               OpReturnValue %64
         %61 = OpLabel
               OpBranch %22
         %22 = OpLabel
         %66 = OpAccessChain %28 %25 %27
         %67 = OpLoad %6 %66
         %68 = OpAccessChain %39 %35 %37 %38
         %69 = OpLoad %6 %68
         %70 = OpFOrdLessThan %17 %67 %69
               OpBranchConditional %70 %19 %21
         %21 = OpLabel
               OpBranch %15
         %15 = OpLabel
               OpBranch %12
         %14 = OpLabel
         %71 = OpAccessChain %39 %35 %37 %37
         %72 = OpLoad %6 %71
               OpReturnValue %72
               OpFunctionEnd
