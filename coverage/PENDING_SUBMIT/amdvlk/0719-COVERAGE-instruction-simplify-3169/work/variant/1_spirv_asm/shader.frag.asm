; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 72
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %52 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 6
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpConstant %6 3
         %20 = OpTypePointer Uniform %6
         %23 = OpConstant %6 4
         %28 = OpConstant %6 2
         %42 = OpConstant %6 1
         %45 = OpTypeBool
         %49 = OpTypeFloat 32
         %50 = OpTypeVector %49 4
         %51 = OpTypePointer Output %50
         %52 = OpVariable %51 Output
         %56 = OpConstant %6 5
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %41 = OpFunctionCall %6 %8
         %43 = OpAccessChain %20 %17 %18 %42
         %44 = OpLoad %6 %43
         %46 = OpIEqual %45 %41 %44
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %67
         %47 = OpLabel
         %53 = OpAccessChain %20 %17 %18 %19
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %49 %54
         %57 = OpAccessChain %20 %17 %18 %56
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %49 %58
         %60 = OpAccessChain %20 %17 %18 %56
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %49 %61
         %63 = OpAccessChain %20 %17 %18 %19
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %49 %64
         %66 = OpCompositeConstruct %50 %55 %59 %62 %65
               OpStore %52 %66
               OpBranch %48
         %67 = OpLabel
         %68 = OpAccessChain %20 %17 %18 %56
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %49 %69
         %71 = OpCompositeConstruct %50 %70 %70 %70 %70
               OpStore %52 %71
               OpBranch %48
         %48 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %6 %21
         %24 = OpAccessChain %20 %17 %18 %23
         %25 = OpLoad %6 %24
         %26 = OpShiftLeftLogical %6 %22 %25
               OpStore %11 %26
         %27 = OpLoad %6 %11
         %29 = OpAccessChain %20 %17 %18 %28
         %30 = OpLoad %6 %29
         %31 = OpShiftRightArithmetic %6 %27 %30
         %32 = OpLoad %6 %11
         %33 = OpAccessChain %20 %17 %18 %28
         %34 = OpLoad %6 %33
         %35 = OpShiftRightArithmetic %6 %32 %34
         %36 = OpAccessChain %20 %17 %18 %18
         %37 = OpLoad %6 %36
         %38 = OpExtInst %6 %1 SClamp %31 %35 %37
               OpReturnValue %38
               OpFunctionEnd
