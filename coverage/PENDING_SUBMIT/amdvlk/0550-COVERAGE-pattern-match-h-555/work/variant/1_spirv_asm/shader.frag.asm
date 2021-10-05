; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 106
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %87
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %23 "j"
               OpName %30 "buf_push"
               OpMemberName %30 0 "two"
               OpName %32 ""
               OpName %57 "a"
               OpName %60 "b"
               OpName %87 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpMemberDecorate %30 0 Offset 0
               OpDecorate %30 Block
               OpDecorate %87 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 5
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpConstant %6 3
         %20 = OpTypePointer Uniform %6
         %30 = OpTypeStruct %6
         %31 = OpTypePointer PushConstant %30
         %32 = OpVariable %31 PushConstant
         %33 = OpTypePointer PushConstant %6
         %36 = OpConstant %6 1
         %38 = OpTypeBool
         %46 = OpConstant %6 4
         %78 = OpConstant %6 2
         %84 = OpTypeFloat 32
         %85 = OpTypeVector %84 4
         %86 = OpTypePointer Output %85
         %87 = OpVariable %86 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %57 = OpVariable %10 Function
         %60 = OpVariable %10 Function
         %58 = OpAccessChain %20 %17 %18 %18
         %59 = OpLoad %6 %58
               OpStore %57 %59
         %61 = OpAccessChain %20 %17 %18 %18
         %62 = OpLoad %6 %61
               OpStore %60 %62
               OpBranch %63
         %63 = OpLabel
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %68 = OpLoad %6 %57
         %69 = OpAccessChain %20 %17 %18 %36
         %70 = OpLoad %6 %69
         %71 = OpSLessThan %38 %68 %70
               OpBranchConditional %71 %64 %65
         %64 = OpLabel
         %72 = OpLoad %6 %57
         %73 = OpIAdd %6 %72 %36
               OpStore %57 %73
         %74 = OpFunctionCall %6 %8
         %75 = OpLoad %6 %60
         %76 = OpIAdd %6 %75 %74
               OpStore %60 %76
               OpBranch %66
         %66 = OpLabel
               OpBranch %63
         %65 = OpLabel
         %77 = OpLoad %6 %60
         %79 = OpAccessChain %20 %17 %18 %78
         %80 = OpLoad %6 %79
         %81 = OpIEqual %38 %77 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %101
         %82 = OpLabel
         %88 = OpAccessChain %20 %17 %18 %19
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %84 %89
         %91 = OpAccessChain %20 %17 %18 %18
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %84 %92
         %94 = OpAccessChain %20 %17 %18 %18
         %95 = OpLoad %6 %94
         %96 = OpConvertSToF %84 %95
         %97 = OpAccessChain %20 %17 %18 %19
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %84 %98
        %100 = OpCompositeConstruct %85 %90 %93 %96 %99
               OpStore %87 %100
               OpBranch %83
        %101 = OpLabel
        %102 = OpAccessChain %20 %17 %18 %18
        %103 = OpLoad %6 %102
        %104 = OpConvertSToF %84 %103
        %105 = OpCompositeConstruct %85 %104 %104 %104 %104
               OpStore %87 %105
               OpBranch %83
         %83 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
         %23 = OpVariable %10 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %6 %21
               OpStore %11 %22
               OpStore %23 %18
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %29 = OpLoad %6 %23
         %34 = OpAccessChain %33 %32 %18
         %35 = OpLoad %6 %34
         %37 = OpShiftRightArithmetic %6 %35 %36
         %39 = OpINotEqual %38 %29 %37
               OpBranchConditional %39 %25 %26
         %25 = OpLabel
               OpBranch %40
         %40 = OpLabel
               OpLoopMerge %42 %43 None
               OpBranch %44
         %44 = OpLabel
         %45 = OpLoad %6 %11
         %47 = OpAccessChain %20 %17 %18 %46
         %48 = OpLoad %6 %47
         %49 = OpSLessThan %38 %45 %48
               OpBranchConditional %49 %41 %42
         %41 = OpLabel
         %50 = OpLoad %6 %11
         %51 = OpIAdd %6 %50 %36
               OpStore %11 %51
               OpBranch %43
         %43 = OpLabel
               OpBranch %40
         %42 = OpLabel
               OpBranch %27
         %27 = OpLabel
         %52 = OpLoad %6 %23
         %53 = OpIAdd %6 %52 %36
               OpStore %23 %53
               OpBranch %24
         %26 = OpLabel
         %54 = OpLoad %6 %11
               OpReturnValue %54
               OpFunctionEnd
