; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %56
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "i"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %56 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %56 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 3
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpTypePointer Uniform %6
         %27 = OpConstant %6 1
         %29 = OpTypeBool
         %30 = OpConstantTrue %29
         %35 = OpConstant %6 2
         %53 = OpTypeFloat 32
         %54 = OpTypeVector %53 4
         %55 = OpTypePointer Output %54
         %56 = OpVariable %55 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %47 = OpFunctionCall %6 %8
         %48 = OpAccessChain %19 %17 %18 %35
         %49 = OpLoad %6 %48
         %50 = OpIEqual %29 %47 %49
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %70
         %51 = OpLabel
         %57 = OpAccessChain %19 %17 %18 %35
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %53 %58
         %60 = OpAccessChain %19 %17 %18 %18
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %53 %61
         %63 = OpAccessChain %19 %17 %18 %18
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %53 %64
         %66 = OpAccessChain %19 %17 %18 %35
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %53 %67
         %69 = OpCompositeConstruct %54 %59 %62 %65 %68
               OpStore %56 %69
               OpBranch %52
         %70 = OpLabel
         %71 = OpAccessChain %19 %17 %18 %18
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %53 %72
         %74 = OpCompositeConstruct %54 %73 %73 %73 %73
               OpStore %56 %74
               OpBranch %52
         %52 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
         %20 = OpAccessChain %19 %17 %18 %18
         %21 = OpLoad %6 %20
               OpStore %11 %21
               OpBranch %22
         %22 = OpLabel
               OpLoopMerge %24 %25 None
               OpBranch %23
         %23 = OpLabel
         %26 = OpLoad %6 %11
         %28 = OpIAdd %6 %26 %27
               OpStore %11 %28
               OpSelectionMerge %32 None
               OpBranchConditional %30 %31 %32
         %31 = OpLabel
               OpSelectionMerge %34 None
               OpBranchConditional %30 %33 %34
         %33 = OpLabel
         %36 = OpAccessChain %19 %17 %18 %35
         %37 = OpLoad %6 %36
               OpReturnValue %37
         %34 = OpLabel
               OpBranch %32
         %32 = OpLabel
               OpBranch %25
         %25 = OpLabel
         %39 = OpLoad %6 %11
         %40 = OpAccessChain %19 %17 %18 %27
         %41 = OpLoad %6 %40
         %42 = OpSLessThan %29 %39 %41
               OpBranchConditional %42 %22 %24
         %24 = OpLabel
         %43 = OpAccessChain %19 %17 %18 %18
         %44 = OpLoad %6 %43
               OpReturnValue %44
               OpFunctionEnd
