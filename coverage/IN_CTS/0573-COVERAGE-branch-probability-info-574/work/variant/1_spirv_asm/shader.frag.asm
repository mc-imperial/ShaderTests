; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 89
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %70
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "func(f1;"
               OpName %10 "x"
               OpName %14 "a"
               OpName %16 "i"
               OpName %44 "buf0"
               OpMemberName %44 0 "_GLF_uniform_int_values"
               OpName %46 ""
               OpName %57 "buf_push"
               OpMemberName %57 0 "resolution"
               OpName %59 ""
               OpName %60 "param"
               OpName %70 "_GLF_color"
               OpDecorate %43 ArrayStride 16
               OpMemberDecorate %44 0 Offset 0
               OpDecorate %44 Block
               OpDecorate %46 DescriptorSet 0
               OpDecorate %46 Binding 0
               OpMemberDecorate %57 0 Offset 0
               OpDecorate %57 Block
               OpDecorate %70 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeInt 32 1
          %9 = OpTypeFunction %8 %7
         %13 = OpTypePointer Function %8
         %15 = OpConstant %8 1
         %17 = OpConstant %8 0
         %24 = OpConstant %8 2
         %25 = OpTypeBool
         %33 = OpConstant %8 80
         %41 = OpTypeInt 32 0
         %42 = OpConstant %41 2
         %43 = OpTypeArray %8 %42
         %44 = OpTypeStruct %43
         %45 = OpTypePointer Uniform %44
         %46 = OpVariable %45 Uniform
         %47 = OpTypePointer Uniform %8
         %57 = OpTypeStruct %6
         %58 = OpTypePointer PushConstant %57
         %59 = OpVariable %58 PushConstant
         %61 = OpTypePointer PushConstant %6
         %68 = OpTypeVector %6 4
         %69 = OpTypePointer Output %68
         %70 = OpVariable %69 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %60 = OpVariable %7 Function
         %62 = OpAccessChain %61 %59 %17
         %63 = OpLoad %6 %62
               OpStore %60 %63
         %64 = OpFunctionCall %8 %11 %60
         %65 = OpIEqual %25 %64 %17
               OpSelectionMerge %67 None
               OpBranchConditional %65 %66 %84
         %66 = OpLabel
         %71 = OpAccessChain %47 %46 %17 %17
         %72 = OpLoad %8 %71
         %73 = OpConvertSToF %6 %72
         %74 = OpAccessChain %47 %46 %17 %15
         %75 = OpLoad %8 %74
         %76 = OpConvertSToF %6 %75
         %77 = OpAccessChain %47 %46 %17 %15
         %78 = OpLoad %8 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpAccessChain %47 %46 %17 %17
         %81 = OpLoad %8 %80
         %82 = OpConvertSToF %6 %81
         %83 = OpCompositeConstruct %68 %73 %76 %79 %82
               OpStore %70 %83
               OpBranch %67
         %84 = OpLabel
         %85 = OpAccessChain %47 %46 %17 %15
         %86 = OpLoad %8 %85
         %87 = OpConvertSToF %6 %86
         %88 = OpCompositeConstruct %68 %87 %87 %87 %87
               OpStore %70 %88
               OpBranch %67
         %67 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %8 None %9
         %10 = OpFunctionParameter %7
         %12 = OpLabel
         %14 = OpVariable %13 Function
         %16 = OpVariable %13 Function
               OpStore %14 %15
               OpStore %16 %17
               OpBranch %18
         %18 = OpLabel
               OpLoopMerge %20 %21 None
               OpBranch %22
         %22 = OpLabel
         %23 = OpLoad %8 %16
         %26 = OpSLessThan %25 %23 %24
               OpBranchConditional %26 %19 %20
         %19 = OpLabel
               OpBranch %27
         %27 = OpLabel
               OpLoopMerge %29 %30 None
               OpBranch %31
         %31 = OpLabel
         %32 = OpLoad %8 %14
         %34 = OpSLessThan %25 %32 %33
               OpBranchConditional %34 %28 %29
         %28 = OpLabel
         %35 = OpLoad %8 %14
         %36 = OpConvertSToF %6 %35
         %37 = OpLoad %6 %10
         %38 = OpFOrdGreaterThan %25 %36 %37
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %40
         %39 = OpLabel
         %48 = OpAccessChain %47 %46 %17 %17
         %49 = OpLoad %8 %48
               OpReturnValue %49
         %40 = OpLabel
         %51 = OpLoad %8 %14
         %52 = OpIAdd %8 %51 %15
               OpStore %14 %52
               OpBranch %30
         %30 = OpLabel
               OpBranch %27
         %29 = OpLabel
               OpBranch %21
         %21 = OpLabel
         %53 = OpLoad %8 %16
         %54 = OpIAdd %8 %53 %15
               OpStore %16 %54
               OpBranch %18
         %20 = OpLabel
               OpReturnValue %17
               OpFunctionEnd
